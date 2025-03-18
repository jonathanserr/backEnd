import 'dotenv/config.js';  
import "../../config/database.js"
import Store from "../Store.js";

let stores = [
    { name: "Central Market", address: "123 Main St, New York, NY", phone: 1234567890 },
    { name: "Tech Haven", address: "456 Tech Ave, San Francisco, CA", phone: 9876543210 },
    { name: "Fashion Hub", address: "789 Style Blvd, Los Angeles, CA", phone: 1122334455 },
    { name: "Outdoor World", address: "321 Adventure Rd, Denver, CO", phone: 6677889900 },
    { name: "Gadget Galaxy", address: "654 Innovation Ln, Seattle, WA", phone: 4433221100 }
];

Store.insertMany(stores)