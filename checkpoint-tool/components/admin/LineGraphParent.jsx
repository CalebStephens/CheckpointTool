import React, {useState} from 'react'
import LabLine from "@/components/admin/labLine";



const LineGraphParent = (props) => {
    const [selectedLab, setSelectedLab] = useState(null);

  
    return (
        <div className="flex flex-col items-center p-4">  
            <LabLine
              paper={props.paper}
            />
          
        </div>
    );
  };

export default LineGraphParent;
