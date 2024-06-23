import { Image, Chip } from "@nextui-org/react";

import { MovieInfoData } from "../components/requestsHandler";
import DescriptionTabs from "../components/descriptionTabs";
import MovieVideoPlayer from "../components/videoPlayer";
import Questions from "../components/faqs";

const MovieInfoPage = async ({ params }) => {
	const id = params.id;

	const data = await MovieInfoData(id);

	return (
		<section className="pt-2 m-auto w-full lg:w-9/12">
			<MovieVideoPlayer id={data.id} />
			<div className="flex items-center">
				{/* Ads code */}
				<div id="shareusadx-6739644104098893-3323887418">
					<script type="module" src="https://securepubads.shareusads.com/scripts/tag/js/sgpt.js"></script>
					<script>
						window._shareustag = window._shareustag || { cmd: [] };
						_shareustag.cmd.push(function() {
							var slot1 = _shareustag.defineSlot('/shareusadx/6739644104098893/3323887418/AniEo Banner 1', ["Responsive"], 'shareusadx-6739644104098893-3323887418');
						});
					</script>
				</div>
				{/* Movie poster */}
				<Image
					isBlurred
					shadow="md"
					src={`https://sup-proxy.zephex0-f6c.workers.dev/api-content?url=https://image.tmdb.org/t/p/original${data.poster_path}`}
					width={180}
					height={300}
					alt="Anime Title Poster"
					className="m-2"
				></Image>
				<div className="mx-5">
					<h4 className={`text-2xl`}>
						<strong>{data.title}</strong>
					</h4>
					<div className="mt-1">
						{data.genres &&
							data.genres.map((item, index) => (
								<Chip
									key={index}
									color="warning"
									variant="faded"
									className="mr-1 mb-1"
								>
									<p className="text-xs">{item.name}</p>
								</Chip>
							))}
					</div>
				</div>
			</div>
			<DescriptionTabs data={data} />
			<Questions />
		</section>
	);
};

export default MovieInfoPage;
