import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BalanceSheet = () => {
  const [reportData, setReportData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/balance-sheet');
        setReportData(response.data.Reports);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data. Please try again later.');
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {reportData?.map(report => (
        <div>
          <h1>{report.ReportName}</h1>
          <p>{report.ReportDate}</p>
          {report.Rows.map((row: any) => (
            <div>
              {row.RowType === 'Header' && (
                <table>
                  <thead>
                    <tr>
                      {row.Cells.map((cell: any) => (
                        <th>{cell.Value}</th>
                      ))}
                    </tr>
                  </thead>
                </table>
              )}

              {row.RowType === 'Section' && (
                <div>
                  <h2>{row.Title}</h2>
                  {row.Rows.map((sectionRow: any, sectionRowIndex: any) => (
                    <table key={sectionRowIndex}>
                      <tbody>
                        <tr>
                            {sectionRow.Cells.map((cell: any) => (
                                <td>{cell.Value}</td>
                            ))}
                         </tr>
                      </tbody>
                    </table>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BalanceSheet;
