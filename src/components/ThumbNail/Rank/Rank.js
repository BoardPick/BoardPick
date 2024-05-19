import { useNavigate } from 'react-router-dom';

const Rank = ({gamedata}) => {
	const navigate = useNavigate();

  return (
    <div className="Rank">
		{ gamedata && gamedata.map((data, i) => (
			<div className="dum" >
				<article className="thumImg" onClick={() => navigate(`/category/${data.id}`)}>
					<img src={data.thumbnailUrl} alt="" />
				</article>
				<article className="thumName">
					<h1 className="num">{i + 1}</h1>
					<article className="text">
						<h1>{data.name}</h1>
						<p>{data.description}</p>
					</article>
				</article>
			</div>
		))}
    </div>
  );
};

export default Rank;
