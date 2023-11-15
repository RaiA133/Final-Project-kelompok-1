import logoRakamin from '../assets/logo/logo-rakamin.png';
import kampusMerdeka from '../assets/logo/kampus-merdeka.png';
import msib from '../assets/logo/msib.png';

function Partner() {
  return (
    <>
      <hr className='mb-5 border-black' />
      <div className="flex flex-col w-full lg:flex-row mb-5">
        <div className="grid flex-grow h-40 card rounded-box place-items-center">
          <img src={logoRakamin} alt="Logo Rakamin" />
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow h-40 card rounded-box place-items-center">
          <img src={kampusMerdeka} alt="Kampus Merdeka" />
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow h-40 card rounded-box place-items-center">
          <img src={msib} alt="MSIB" />
        </div>
      </div>
    </>
  )
}

export default Partner