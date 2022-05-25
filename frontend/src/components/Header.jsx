
export default function Header() {
  return (
    <header className="App-header">
      <div className='wrap-inner'>
        <div className='header-left'>
          <button className='menu-btn'>
            <img
              src={`${process.env.PUBLIC_URL}/menu.png`}
              className='header-menu'
              alt='menu button'
            />
          </button>
          <p className='logo'>PetBrunch</p>
        </div>
        <div className='header-right'>
          <div className="search-wrap">
            <form action=""></form>
            <button className="btn-search" onClick={() => alert("add click event")}>
              <img src={`${process.env.PUBLIC_URL}/search.png`} alt="" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}