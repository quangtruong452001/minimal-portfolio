import PortfolioItemData from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
function Portfolio() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {PortfolioItemData.map((project, index) => (
                    <PortfolioItem
                        key={index}
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
