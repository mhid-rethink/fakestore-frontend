const Column = ({ children, title }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Column;
