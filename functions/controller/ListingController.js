const Listing = require("../model/ListingModel");

exports.createListing = async (req, res) => {
  try {
    const newListing = new Listing({
      ...req.body,
      seller: req.user._id,
      // Assuming req.user is populated by an authentication middleware
    });
    await newListing.save();
    res.status(201).send(newListing);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find({})
        .populate("seller").populate("goods");
    res.send(listings);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id)
        .populate("seller").populate("goods");
    if (!listing) {
      return res.status(404).send();
    }
    res.send(listing);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateListing = async (req, res) => {
  try {
    const listing = await Listing.findByIdAndUpdate(req.params.id, req.body,
        {new: true, runValidators: true});
    if (!listing) {
      return res.status(404).send();
    }
    res.send(listing);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteListing = async (req, res) => {
  try {
    const listing = await Listing.findByIdAndDelete(req.params.id);
    if (!listing) {
      return res.status(404).send();
    }
    res.send({message: "Listing successfully deleted"});
  } catch (error) {
    res.status(500).send(error);
  }
};
