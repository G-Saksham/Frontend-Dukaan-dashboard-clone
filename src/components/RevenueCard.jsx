function RevenueCard({ title, amount }) {
  return (
    <div className="bg-white rounded shadow-custom p-5 grid h-min gap-y-4 bg-white-500">
        <div className="text-gray-700 flex items-center">
            {title}
        </div>
        <div className="flex justify-between items-center">
            <div className="font-semibold text-3xl">{amount}</div>
        </div>
    </div>
  );
}

export default RevenueCard;