const Job = (props) => {
  return (
    <div className={`job ${props.className}`}>
      {props.title ? (
        <span style={{ fontSize: "30px" }}>{props.title}</span>
      ) : (
        <span>Annonce sans titre</span>
      )}
      <span>
        {props.contractType} - {props.country} - {props.city}
      </span>
    </div>
  );
};

export default Job;
