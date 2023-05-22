export interface ProviderTableProps {
  title: string;
  address?: string;
  phone?: string;
  specialty?: string;
}

export const initialProps: ProviderTableProps = {
  title: "Provider Details",
  address:
    "< insert address here >",
    phone:
    "< insert phone here >",
  specialty:
    "< insert specialty here >"
};

const ProviderTable = ({
  title,
  address,
  phone,
  specialty
}: ProviderTableProps) => {
  const renderRow = (rowTitle: string, value: string) => {
    return (
      // title should be a fixed width so that the value is aligned
      <div className="border-t border-gray-400 py-2">
        <div className="grid grid-cols-4 gap-x-4">
          <dt className="text-sm font-medium text-gray-500">{rowTitle}</dt>
          <dd className="col-span-3 text-sm text-gray-900">{value}</dd>
        </div>
      </div>
    );
  };

  return (
    <div className="px-4">
      <h2 className="text-lg font-medium text-gray-900">{title}</h2>
      <div className="mt-4 mb-8">
        <div className="gap-x-4 gap-y-8">
          {address && renderRow("Address", address)}
          {phone && renderRow("Phone", phone)}
          {specialty && renderRow("Specialty", specialty)}
        </div>
      </div>
    </div>
  );
};

export default ProviderTable;
