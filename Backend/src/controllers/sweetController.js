const Sweet = require("../models/Sweet");
const User = require("../models/User");

// Add a new sweet (Admin)
exports.addSweet = async (req, res) => {
  try {
    const { name, category, price, quantity, image } = req.body;
    
    // Validation
    if (!name || name.trim().length === 0) {
      return res.status(400).json({ error: "Name is required" });
    }

    if (!price || isNaN(price) || Number(price) <= 0) {
      return res.status(400).json({ error: "Price must be a positive number" });
    }

    if (quantity !== undefined && (isNaN(quantity) || Number(quantity) < 0)) {
      return res.status(400).json({ error: "Quantity must be a non-negative number" });
    }

    const sweet = await Sweet.create({ 
      name: name.trim(), 
      category: category?.trim() || undefined, 
      price: Number(price), 
      quantity: quantity ? Number(quantity) : 0, 
      image: image?.trim() || undefined 
    });
    res.status(201).json({ message: "Sweet added successfully", data: sweet });
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "Server error" });
  }
};

// Get all sweets
exports.getSweets = async (req, res) => {
  try {
    const sweets = await Sweet.find().sort({ name: 1 });
    res.status(200).json({ message: "Sweets fetched successfully", data: sweets });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Search sweets
exports.searchSweets = async (req, res) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query;
    const filter = {};
    
    if (name && name.trim()) {
      filter.name = { $regex: name.trim(), $options: "i" };
    }
    
    if (category && category.trim()) {
      filter.category = { $regex: category.trim(), $options: "i" };
    }
    
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) {
        const min = Number(minPrice);
        if (isNaN(min) || min < 0) {
          return res.status(400).json({ error: "minPrice must be a non-negative number" });
        }
        filter.price.$gte = min;
      }
      if (maxPrice) {
        const max = Number(maxPrice);
        if (isNaN(max) || max < 0) {
          return res.status(400).json({ error: "maxPrice must be a non-negative number" });
        }
        filter.price.$lte = max;
      }
      if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
        return res.status(400).json({ error: "minPrice cannot be greater than maxPrice" });
      }
    }
    
    const sweets = await Sweet.find(filter).sort({ name: 1 });
    res.status(200).json({ message: "Search results", data: sweets });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Update sweet (Admin)
exports.updateSweet = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Validation
    if (updates.price !== undefined && (isNaN(updates.price) || Number(updates.price) <= 0)) {
      return res.status(400).json({ error: "Price must be a positive number" });
    }

    if (updates.quantity !== undefined && (isNaN(updates.quantity) || Number(updates.quantity) < 0)) {
      return res.status(400).json({ error: "Quantity must be a non-negative number" });
    }

    if (updates.name !== undefined && updates.name.trim().length === 0) {
      return res.status(400).json({ error: "Name cannot be empty" });
    }

    // Clean up the updates
    if (updates.name) updates.name = updates.name.trim();
    if (updates.category) updates.category = updates.category.trim();
    if (updates.image) updates.image = updates.image.trim();
    if (updates.price !== undefined) updates.price = Number(updates.price);
    if (updates.quantity !== undefined) updates.quantity = Number(updates.quantity);

    const sweet = await Sweet.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    if (!sweet) return res.status(404).json({ error: "Sweet not found" });
    res.status(200).json({ message: "Sweet updated successfully", data: sweet });
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "Server error" });
  }
};

// Delete sweet (Admin)
exports.deleteSweet = async (req, res) => {
  try {
    const { id } = req.params;
    const sweet = await Sweet.findByIdAndDelete(id);
    if (!sweet) return res.status(404).json({ error: "Sweet not found" });
    res.status(200).json({ message: "Sweet deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Purchase sweet (User)
exports.purchaseSweet = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const userId = req.user.id;

    if (!quantity || quantity <= 0) return res.status(400).json({ error: "Quantity must be greater than 0" });

    const sweet = await Sweet.findById(id);
    if (!sweet) return res.status(404).json({ error: "Sweet not found" });
    if (sweet.quantity < quantity) return res.status(400).json({ error: "Insufficient stock" });

    sweet.quantity -= quantity;
    await sweet.save();

    const user = await User.findById(userId);
    user.purchases.push({
      name: sweet.name,
      price: sweet.price,
      quantity,
      total: sweet.price * quantity,
      image: sweet.image,
      date: new Date(),
    });
    await user.save();

    res.status(200).json({
      message: "Purchase successful",
      data: {
        sweet: sweet.name,
        quantity,
        total: sweet.price * quantity,
        remainingStock: sweet.quantity,
      },
    });
  } catch (error) {
    console.error("Purchase error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Restock sweet (Admin)
exports.restockSweet = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    if (!quantity || quantity <= 0) return res.status(400).json({ error: "Quantity must be greater than 0" });

    const sweet = await Sweet.findById(id);
    if (!sweet) return res.status(404).json({ error: "Sweet not found" });

    sweet.quantity += quantity;
    await sweet.save();
    res.status(200).json({ message: "Restock successful", data: sweet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get sweet by id
exports.getSweetById = async (req, res) => {
  try {
    const { id } = req.params;
    const sweet = await Sweet.findById(id);
    if (!sweet) return res.status(404).json({ error: "Sweet not found" });
    res.status(200).json({ message: "Sweet fetched successfully", data: sweet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
