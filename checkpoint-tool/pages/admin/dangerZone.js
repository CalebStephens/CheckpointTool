import DangerZone from '@/components/admin/DangerZone';
import Layout from '@/components/admin/layout';
import { get } from '@/utils/api'

const DangerZonePage = (props) => {
    return (
    <Layout>
      <DangerZone students = {props} />
    </Layout>
    )
  }

  export const getServerSideProps = async () => {

    const res = await get(`students?timestamp=${Date.now()}`);
    const data = res.data;
  
    return {
      props: {
        data: data,
      },
    };
  };

export default DangerZonePage;