import { get } from '@/utils/api'
import LabsCompleted from '../../components/admin/LabsCompleted'
import Layout from '../../components/admin/layout'

const LabsCompletedPage = (props) => {
    return (
    <Layout>
      <LabsCompleted students={props.paper.students} labs={props.paper.labs} />
    </Layout>
    )
  }



  export const getServerSideProps = async () => {

    const res = await get(`papers/1?timestamp=${Date.now()}`);
    const data = res.data.data;
  
    return {
      props: {
        paper: data,
      },
    };
  };
  

export default LabsCompletedPage;