import React from 'react';
import Link from "next/link";
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { options } from '../../api/auth/[...nextauth]/options';


const AdminPage = async () => {

const session = await getServerSession(options);

if (!session) {
  redirect('/api/auth/signin?callbackUrl=/Explore');
}

  return (
    <div className="explore-page-container bg-white rounded-lg shadow-lg p-6">
      <section className="task-section">
        <div className="task mb-4">
            <h1>ADMIN PAGE</h1>
          <button className="BaseButton bg-gray-500 hover:bg-red-600 text-white font-bold py-4 px-4">
            <Link href="./Admin/Scouting" className="text-white">
              Scout
            </Link>
          </button>
          <p className="text-subtitle text-gray-700">
            Click here to view scouting data
          </p>
        </div>

        <div className="task mb-4">
          <button className="BaseButton bg-gray-500 hover:bg-red-600 text-white font-bold py-4 px-4 ">
            <Link href="./Admin/Sizing" className="text-white">
              Size
            </Link>
          </button>
          <p className="text-subtitle text-gray-700">
          Click here to view sizing data
          </p>
        </div>

        <div className="task">
          <button className="BaseButton bg-gray-500 hover:bg-red-600 text-white font-bold py-4 px-4">
            <Link href="./Admin/Classifying" className="text-white">
              Classify
            </Link>
          </button>
          <p className="text-subtitle text-gray-700">
          Click here to view classification data
          </p>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;