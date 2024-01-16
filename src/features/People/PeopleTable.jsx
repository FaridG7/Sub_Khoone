import TableRow from "./PersonRow";

function PeopleTable({ people }) {
  return (
    <table dir="rtl">
      <tr>
        <th>نام</th>
        <th>نام خانوادگی</th>
        <th>کد ملی</th>
        <th>شماره تماس</th>
        <th>تاریخ ایجاد</th>
        <th></th>
      </tr>
      {people.map((person) => (
        <TableRow person={person} />
      ))}
    </table>
  );
}

export default PeopleTable;
