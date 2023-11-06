import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllAdmins = async (req, res) => {
    try {
        const admins = await prisma.user.findMany();
        return res.status(200).json({ data: admins });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deleteAdmin = async (req,res) => {
    try {
        const { id } = req.params;
        const admin = await prisma.user.delete({
            where: { id: Number(id) },
        });
        return res.status(200).json({ data: admin });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export {getAllAdmins, deleteAdmin}; 