import { Modal } from "antd";

const CharacterDetailsModal = ({
  selectedCharacter,
  loading,
  handleCloseModal,
}) => {
  return (
    <Modal
      title={selectedCharacter?.name}
      visible={!!selectedCharacter}
      onCancel={handleCloseModal}
      footer={null}
      style={{ backgroundColor: "#A2AEA9" }}
    >
      <div>
        <p>Height: {selectedCharacter?.height} meters</p>
        <p>Mass: {selectedCharacter?.mass} kg</p>
        <p>Added to API: {selectedCharacter?.created}</p>
        <p>Appears in {selectedCharacter?.films?.length || 0} film(s)</p>
        {selectedCharacter?.homeworldData && (
          <div>
            <h3>Homeworld</h3>
            <p>Name: {selectedCharacter?.homeworldData?.name}</p>
            <p>Terrain: {selectedCharacter?.homeworldData?.terrain}</p>
            <p>Climate: {selectedCharacter?.homeworldData?.climate}</p>
            <p>
              Number of residents:{" "}
              {selectedCharacter?.homeworldData?.residents?.length || 0}
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default CharacterDetailsModal;
