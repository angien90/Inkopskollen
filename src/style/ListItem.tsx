type ListItemProps = {
  children: React.ReactNode;
  className?: string;
};

const ListItem = ({ children, className = "" }: ListItemProps) => (
  <li
    className={
      "flex flex-col sm:flex-row items-center justify-center sm:justify-between text-gray-600 bg-gray-200 px-4 py-2 rounded mb-2 gap-2 text-center sm:text-left " +
      className
    }
  >
    {children}
  </li>
);

export default ListItem;
