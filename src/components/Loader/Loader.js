import Loader from 'react-loader-spinner';

export default function LoaderDots() {
  return (
    <div className="Loader">
      <Loader type="ThreeDots" color="#303f9f" height={80} width={80} />
    </div>
  );
}
