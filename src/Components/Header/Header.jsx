import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Logo, LogoutBtn } from '../index'

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  console.log("authStatus",authStatus);
  const navigate = useNavigate()

  const navItem = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: "/all-pots",
      active: authStatus
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: !authStatus
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width={"70px"} />
            </Link>

          </div>
          <ul className='flex ml-auto'>
            {navItem.map((item) =>
              item.active ?
                <li key={item.name}>
                  <button className='inline-block px-6 py-2 duration-200 hover: bg-blue-100 rounded-full' onClick={() => navigate(item.slug)}>{item.name}</button>
                </li> : null
            )}
          </ul>
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </nav>
      </Container>
    </header>
  )
}

export default Header