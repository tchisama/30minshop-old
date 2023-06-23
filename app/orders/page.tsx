import { Menu } from "@/components/Menu";

export default function Orders() {
  return (
    <div className="min-h-screen w-full flex relative">
      <Menu />
      <div className="flex-1 p-6">
      <h1 className="py-8 text-5xl text-primary font-semibold uppercase">Orders</h1>
      <div className="overflow-x-auto flex-1 bg-white rounded-2xl shadow-lg p-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>

      </div>
    </div>
  );
}
