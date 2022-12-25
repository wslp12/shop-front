const CouponCard = () => {
  return (
    <div className="bg-cyan-100 rounded-md w-60 min-w-60 p-2 overflow-hidden h-full">
      <div
        className="rounded-sm shadow-md shadow-slate-300 bg-white relative h-full
      after:absolute after:contents-[''] after:bg-cyan-100 after:rounded-full after:w-10 after:h-10 after:-right-7 after:top-6
      before:absolute before:contents-[''] before:bg-cyan-100 before:rounded-full before:w-10 before:h-10 before:-left-7 before:top-6
      "
      >
        <div className="flex justify-evenly items-center h-full">
          <div className="w-1/3 flex">
            <img width={50} src="https://cdn-icons-png.flaticon.com/512/3531/3531671.png" alt="" />
          </div>
          <div className="h-full absolute left-1/3 border-l-4 border-black border-dotted" />
          <div>
            <p className="text-base">상의</p>
            <span className="text-sm">
              <span>
                <strong className="text-red-500">10%</strong> 할인 쿠폰
              </span>
            </span>
            <div className="text-xs">2023/01/12 까지</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CouponCard;
