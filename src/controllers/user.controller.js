import { asyncHandler } from "../utils/asynchandler";

const registeruser = asyncHandler(async (req, res) => {
    // Logic for registering a user
    res.status(200).json({
        messege:"ok"
    });
});

export { registeruser };
