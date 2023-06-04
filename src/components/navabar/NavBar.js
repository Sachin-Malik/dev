import './navbarStyle.css'
const navItems = [
  {
    name: 'home',
    url: '#home'
  },
  {
    name: 'work',
    url: '#work'
  },
  {
    name: 'experience',
    url: '#experience'
  },
  {
    name: 'contact',
    url: '#contact'
  },
];
const navTitle = "SACHIN.DEV"
export function NavBar() {
  return (
    <div className="row justify-content-between pt-4 pb-3">
      <div className="col-12 col-md-4 nav-title text-center text-md-start ">
        {navTitle}
      </div>
      <div className="d-none d-md-block col-md-8 text-end">
        {
          navItems.map((item) => {
            return <a href={`${item.url}`} className="nav-item">{item.name}</a>
          })
        }
      </div>
    </div>
  )
}