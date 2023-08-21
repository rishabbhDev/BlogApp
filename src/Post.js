export default function Post() {
    return (
      <div className="post">
        <div className="image">
          <img
            src="https://static01.nyt.com/images/2023/08/13/multimedia/13hawaii_carousel-075f-zbkh/13hawaii_carousel-075f-zbkh-threeByTwoMediumAt2X.jpg?quality=75&auto=webp "
            alt=" "
          />
        </div>
        <div className="text">
          <h2>Hawaii Wildfires Maui Death Toll Climbs to 93</h2>
          <p className="info">
            <a  className="author">Mohak Mangal</a>
            <time>2023-08-13 18:36</time>
          </p>
          <p className="summary">
            The wildfires, now the deadliest in the United States in over a
            century, have left frustrated residents questioning the government’s
            disaster preparedness and response. The number of dead is expected
            to rise.The wildfires in Maui, now the deadliest in the United
            States in more than a century, have left many questions about how so
            many lives were lost and why government aid has still not reached
            many survivors. The death toll rose to 93 on Saturday night and was
            expected to climb
          </p>
        </div>
      </div>
    );
}