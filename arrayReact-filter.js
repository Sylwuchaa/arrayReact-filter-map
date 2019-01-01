const data = {
  users: [
      {
      id: 1,
      name: "Adam",
      age: 45,
      sex: "M",
      dateOfBirth: "23051991",
    },
    {
      id: 2,
      name: "Krystian",
      age: 22,
      sex: "M",
      dateOfBirth: "23051993",
    },
    {
      id: 3,
      name: "Bartek",
      age: 18,
      sex: "M",
      dateOfBirth: "23051992",
    },
    {
      id: 4,
      name: "Ania",
      sex: "K",
      age: 19,
      dateOfBirth: "23051994",
    },
    {
      id: 5,
      name: "Basia",
      age: 27,
      sex: "K",
      dateOfBirth: "23051999",
    }
  ]
}



const Item = ( {user} ) => (
  <div className="userInfo">
    <h1>{user.name}</h1>
    <p>Informacje o uzytkowniku</p>
    <p>Wiek użytkonika: {user.age}</p>
    <p>Płeć użytkownika: {user.sex}</p>
  </div>
)

class ListItem extends React.Component {
  state = {
    select: "all"
  }
  handleUsersFilter(option) {
    this.setState({
      select: option
    })

  }
  showListItem = () => {
    let users = this.props.data.users
    switch (this.state.select) {
      case "all":
        return users.map(user => <Item user={user} key={user.id} />)
      case "female":
        users = users.filter(user => user.sex === "K");
        return users.map(user => <Item user={user} key={user.id} />)
      case "male":
        users = users.filter(user => user.sex === "M");
        return users.map(user => <Item user={user} key={user.id} />)
      default:
        return "coś się zepsuło"
  }
}
  render() {
    return (
    <div>
      <button onClick={this.handleUsersFilter.bind(this, "all")}>Wszyscy</button>
      <button onClick={this.handleUsersFilter.bind(this, "female")}>Kobiety</button>
      <button onClick={this.handleUsersFilter.bind(this, "male")}>Mężczyźni</button>
      {this.showListItem()}
    </div>
    )
  }
}

ReactDOM.render(<ListItem data={data} />, document.getElementById('root'));