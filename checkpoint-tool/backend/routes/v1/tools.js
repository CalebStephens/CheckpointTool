import { Router } from "express";
const router = Router();

import { getAllTools, getTool, createTool, updateTool } from "../../controllers/v1/tool.js";

router.route("/").get(getAllTools);
router.route("/:id").get(getTool);
router.route("/create").post(createTool);
router.route("/:id").put(updateTool);

export default router;
