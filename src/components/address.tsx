import React from "react";

interface AddressProps {
  address: string;
  link?: boolean;
  ellipsis?: boolean;
  color?: string;
}

const Address: React.FC<AddressProps> = ({ address, link = false, ellipsis = false, color }) => {
  const formattedAddress = ellipsis ? `${address.slice(0, 8)}...${address.slice(-8)}` : address;

  const addressStyle = {
    color,
    textDecoration: "none",
    cursor: link ? "pointer" : "default",
  };

  const handleClick = () => {
    if (link) {
      // Handle click event for the address link
      // Example: window.open(`https://etherscan.io/address/${address}`);
    }
  };

  return (
    <span className="efa-8892-c-2-c-9-a-8-e-63" style={addressStyle} onClick={handleClick}>
      {formattedAddress}
    </span>
  );
};

export default Address;
