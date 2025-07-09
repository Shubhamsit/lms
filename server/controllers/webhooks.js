// import { Webhook } from "svix";

// import User from "../models/User.js";

// // Api Controller function to manage Clerk User with database

// export const clerkWebhooks = async (req, res) => {
//   try {
//     const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

//     await whook.verify(JSON.stringify(req.body), {
//       "svix-id": req.headers["svix-id"],
//       "svix-timestamp": req.headers["svix-timestamp"],
//       "svix-signature": req.headers["svix-signature"],
//     });

//     const { data, type } = req.body;``

//     switch (type) {
//       case "user.created": {
//         const userData = {
//           _id: data.id,
//           email: data.email_addresses[0].email_address,
//           name: data.first_name + " " + data.last_name,
//           imageUrl: data.image_url,
//         };


//         console.log(userData,"meraDAta");
        

//         await User.create(userData);
//         res.json({});
//         break;
//       }

//       case "user.updated": {
//         const userData = {
//           email: data.email_addresses[0].email_address,
//           name: data.first_name + " " + data.last_name,
//           imageUrl: data.image_url,
//         };

//         await User.findByIdAndUpdate(data.id, userData);
//         res.json({});
//         break;
//       }

//       case "user.deleted": {
//         await User.findByIdAndDelete(data.id);
//         res.json({});
//         break;
//       }

//       default:
//         break;
//     }
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };


import { Webhook } from "svix";
import User from "../models/User.js";

export const clerkWebhooks = async (req, res) => {
  try {
    const payload = req.body.toString("utf8");

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const evt = whook.verify(payload, headers);

    const { data, type } = evt;

    console.log("📩 Clerk event:", type);

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0]?.email_address || "no-email",
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          imageUrl: data.image_url || data.profile_image_url || "",
        };

        console.log("🧑 Saving user:", userData);
        await User.create(userData);
        res.status(201).json({});
        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0]?.email_address || "no-email",
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          imageUrl: data.image_url || data.profile_image_url || "",
        };

        await User.findByIdAndUpdate(data.id, userData);
        res.status(200).json({});
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        res.status(200).json({});
        break;
      }

      default:
        res.status(200).json({});
        break;
    }
  } catch (error) {
    console.error("❌ Webhook Error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};
