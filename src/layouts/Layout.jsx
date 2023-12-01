const Layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center w-screen scroll-smooth -z-50">{children}</div>
    )
};
export default Layout;