import { InfoRow } from "./InfoRow";

export const InfoWrapper = () => {
  return (
    <div className="info-wrapper">
      <InfoRow mode="address" />
      <InfoRow mode="hours" />
      <InfoRow mode="contact" />
    </div>
  );
};
