import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useContext, useRef, useState } from "react";
import axios from "axios";
import GetDataContext from "../../context/getDataContext";

function PlusButtom() {
  const [openModal, setOpenModal] = useState(false);
  const AltitueRef = useRef(0)
  const ADIref = useRef(0)
  const HISref = useRef(0)
  const { data, setData } = useContext(GetDataContext)


  function onCloseModal() {
    setOpenModal(false);
  }

  const GetData = async () => {
    const atltitue = AltitueRef.current.value
    const his = HISref.current.value
    const adi = ADIref.current.value
    console.log("his:", HISref.current.value);
    console.log("alt:", AltitueRef.current.value);
    console.log("adi:", ADIref.current.value);

    // Validation of entered information and notification accordingly
    if (isNaN(atltitue) || atltitue < 0 || atltitue > 3000) {
      alert('Altitude must be between 0 and 3000');
      return;
    }

    if (isNaN(his) || his < 0 || his > 360) {
      alert('HIS must be between 0 and 360');
      return;
    }

    if (isNaN(adi) || adi < 0 || adi > 100) {
      alert('ADI must be between 0 and 100');
      return;
    }

    // making axios post request to server and add parameters 
    try {
      const response = axios.post("http://localhost:3001/air", {
        "Altitude": atltitue,
        "HIS": his,
        "ADI": adi
      })
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
    setData({ atltitue, his, adi });
    setOpenModal(false);
  };





  return (
    <>
      <Button size={'text-2xl'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setOpenModal(true)}>+</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add- ALTITUE / HIS / ADI</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Number" value="ALTITUE" />
              </div>
              <TextInput placeholder="Between 0 to 3000" type="number" ref={AltitueRef}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Number" value="HIS" />
              </div>
              <TextInput placeholder="Between 0 to 360" type="number" ref={HISref}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Number" value="ADI" />
              </div>
              <TextInput placeholder="Between 0 to 100" type="number" ref={ADIref}
                required
              />
            </div>

            <div className="w-full">
              <Button onClick={() => {
                GetData()
              }}>SEND</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}


export default PlusButtom