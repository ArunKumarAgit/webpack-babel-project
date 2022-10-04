import React from 'react';

const RepoList = ({ data }) => {
  return (
    <div className="card repo-list">
      <h2>Repo List</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th className="th1" colSpan={2}>
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((singleRepo, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  <a
                    href={singleRepo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {singleRepo.name}
                  </a>
                </td>

                <td>*</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RepoList;
