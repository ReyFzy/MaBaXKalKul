const Layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center max-w-[360px] scroll-smooth -z-50">{children}</div>
    )
};
export default Layout;