import React from "react";

const DeleteAccount: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-700 p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-lg w-full p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Delete Account Request
        </h1>
        <p className="text-gray-700 mb-4">
          If you wish to delete your VoltGo account and all associated data, please send us a request at:
        </p>
        <p className="text-blue-600 font-semibold">
          support@voltgo.us
        </p>
        <p className="text-gray-600 mt-4 text-sm">
          Your request will be processed in accordance with our Privacy Policy. 
          Please allow up to 7 business days for confirmation.
        </p>
      </div>
    </div>
  );
};

export default DeleteAccount;
