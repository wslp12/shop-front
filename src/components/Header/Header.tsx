import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Badge from '@mui/material/Badge';

const Header = () => {
  const arr = [
    {
      color: 'text-red-500',
      name: '신상',
    },
    {
      color: 'text-purple-600',
      name: '특가 할인제품',
    },
    {
      color: '',
      name: '니트',
    },
    {
      color: '',
      name: '바지',
    },
    {
      color: '',
      name: '블라우스',
    },
    {
      color: '',
      name: '악세서리',
    },
    {
      color: '',
      name: '가방',
    },
    {
      color: '',
      name: '신발',
    },
  ];

  return (
    <header className="h-12  border-b border-slate-200">
      <div className="flex h-full pl-4 pr-4">
        <div className="first:mr-auto flex">
          <button type="button">
            <MenuIcon />
          </button>
        </div>
        <div className="flex justify-center items-center ml-12 text-xl bg-gradient-to-r from-green-900 to-red-500 bg-clip-text fill-transparent text-transparent">
          마무사
        </div>
        <div className="flex-grow flex gap-8">
          {arr.map((arrItem, index) => {
            return (
              <button
                type="button"
                key={arrItem.name}
                className={`text-sm 
                ${arrItem.color} ${
                  index === 0 &&
                  'pl-5 before:left-0 before:content-["|"]'
                } `}
              >
                <div>{arrItem.name}</div>
              </button>
            );
          })}
        </div>
        <div className="last:ml-auto flex gap-3">
          <button type="button">
            <SearchIcon />
          </button>

          <button type="button">
            <Badge
              badgeContent={4}
              color="primary"
            >
              <ShoppingCartIcon />
            </Badge>
          </button>
          <button type="button">
            <PermIdentityIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
