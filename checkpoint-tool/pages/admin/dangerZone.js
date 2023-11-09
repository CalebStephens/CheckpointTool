import DangerZone from '@/components/admin/DangerZonePage/DangerZone';
import Layout from '@/components/admin/layout';
import { get } from '@/utils/api';
import authRoute from '@/backend/middleware/authRoute';

const DangerZonePage = (props) => {
  return (
    <Layout>
      <DangerZone students={props} />
    </Layout>
  );
};

export const getServerSideProps = async (context) => {


  // If authentication is successful, proceed to fetch data
  const res = await get(`students?timestamp=${Date.now()}`);
  const data = res.data;

  return {
    props: {
      data: data,
    },
  };
};

export default DangerZonePage;
