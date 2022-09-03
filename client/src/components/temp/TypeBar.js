import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../../index";
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = () => {

    const {device} = useContext(Context)
  return (
      <ListGroup>
          {device.types.map(type =>
              <ListGroup.Item
                  active={type.id === device.selectedType.id}
                  onClick={() => device.setSelectedType(type)}
                  style={{whiteSpace: "nowrap", cursor: 'pointer'}} key={type.id}>
                      {type.name}
              </ListGroup.Item>
          )}
      </ListGroup>
  )
};


export default observer(TypeBar);