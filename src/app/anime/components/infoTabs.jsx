"use client";

import PropTypes from 'prop-types';
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { lexend, atkinson } from "../../../../config/fonts";

export default function DescriptionTabs({ data }) {
	return (
		<div className="flex w-full flex-col">
			<Tabs aria-label="Options" className={lexend.className}>
				<Tab key="description" title="Description">
					<Card shadow="sm">
						<CardBody className={atkinson.className}>
							{data.description || "No description found"}
						</CardBody>
					</Card>
				</Tab>
				<Tab key="details" title="Details">
					<Card shadow="sm">
						<CardBody className={atkinson.className}>
							{data.totalEpisodes && (
								<h4>
									<strong>Episodes</strong>:{" "}
									<span>{data.totalEpisodes}</span>
								</h4>
							)}
							{data.type && (
								<h4>
									<strong>Type</strong>: <span>{data.type}</span>
								</h4>
							)}
							{data.subOrDub && (
								<h4>
									<strong>SUB/DUB</strong>:{" "}
									<span>{data.subOrDub.toUpperCase()}</span>
								</h4>
							)}
							{data.status && (
								<h4>
									<strong>Status</strong>: <span>{data.status}</span>
								</h4>
							)}
							{data.releaseDate && (
								<h4>
									<strong>Release Year</strong>:{" "}
									<span>{data.releaseDate}</span>
								</h4>
							)}
						</CardBody>
					</Card>
				</Tab>
			</Tabs>
			<div className="my-4">
				<center>
					<div id="shareusadx-6739644104098893-3323887418"></div>
					<script
						type="module"
						src="https://securepubads.shareusads.com/scripts/tag/js/sgpt.js"
					></script>
					<script
						dangerouslySetInnerHTML={{
							__html: `
								window._shareustag = window._shareustag || { cmd: [] };
								_shareustag.cmd.push(function () {
									_shareustag.defineSlot('/shareusadx/6739644104098893/3323887418/AniEo Banner 1', ['Responsive'], 'shareusadx-6739644104098893-3323887418');
								});
							`,
						}}
					></script>
				</center>
			</div>
		</div>
	);
}

DescriptionTabs.propTypes = {
	data: PropTypes.shape({
		description: PropTypes.string,
		totalEpisodes: PropTypes.number,
		type: PropTypes.string,
		subOrDub: PropTypes.string,
		status: PropTypes.string,
		releaseDate: PropTypes.string,
	}),
};
