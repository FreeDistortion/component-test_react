const Menu = function (props) {
  // JS code를 이용해 새로운 array를 만들어서 작업
  const li_data = [];

  // for을 이용해 prop으로 받은 data 출력
  for (let i = 0; i < props.list.length; i++) {
    li_data.push(
      <li key={props.list[i].id}>
        {props.list[i].id}, {props.list[i].name}, {props.list[i].addr}
      </li>
    );
  }

  return (
    <nav>
      <ol>{li_data}</ol>
      <ol>
        {props.list.map((n) => (
          <li key={n.id}>{n.id}</li>
        ))}
      </ol>
    </nav>
  );
};

export default Menu;
