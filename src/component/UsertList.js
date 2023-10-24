const UserList = function () {
  let userlist = [
    { id: "1", name: "V", addr: "Seoul" },
    { id: "2", name: "Sugar", addr: "Daegu" },
    { id: "3", name: "NamJun", addr: "Ilsan" },
    {id:"asd",name:"asdName",addr:"asdAddr"}
  ];
  return (
    <div>
      {userlist.map((n) => (
        <p key={n.id}>
            {n.id},{n.name},{n.addr}</p>
      ))}
    </div>
  );
};

export default UserList;
