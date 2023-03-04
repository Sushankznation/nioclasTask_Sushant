import { BeatLoader } from 'react-spinners';
export default function LoadingSpinner() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <BeatLoader color={'#123abc'} />
      </div>
    );
  }