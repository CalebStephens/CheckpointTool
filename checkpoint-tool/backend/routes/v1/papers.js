import { Router } from "express";
const router = Router();

import { getAllPapers, getPaper, createPaper, getLabs, updateLabs } from "../../controllers/v1/papers.js";

router.route("/").get(getAllPapers);
router.route("/:id").get(getPaper);
router.route("/labs/:id").get(getLabs);
router.route("/create").post(createPaper);
router.route("/update/labs/:id").put(updateLabs);

export default router;
