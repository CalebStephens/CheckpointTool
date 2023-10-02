
import { seedTools } from "./tools.js";
import { seedPapers } from "./papers.js";
import { seedStudents } from "./students.js";


const seeder = async () => {
  try {
    await seedTools();

    await seedPapers();

    await seedStudents();

  } catch (error) {
    console.error("Error while seeding:", error);
    process.exit(1);
  }
};

export { seeder };
