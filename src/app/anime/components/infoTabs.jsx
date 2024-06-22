"use client";

import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import { lexend, atkinson } from "../../../../config/fonts";

export default function DescriptionTabs({ data: data }) {
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
				<Tab key="episodes" title="Details">
					<Card shadow="sm">
						<CardBody className={atkinson.className}>
							<h4>
								<strong>Episodes</strong>:{" "}
								<span>{data.totalEpisodes}</span>
							</h4>
							<h4>
								<strong>Type</strong>: <span>{data.type}</span>
							</h4>
							<h4>
								<strong>SUB/DUB</strong>:{" "}
								<span>{data.subOrDub.toUpperCase()}</span>
							</h4>
							<h4>
								<strong>Status</strong>:{" "}
								<span>{data.status}</span>
							</h4>
							<h4>
								<strong>Release Year</strong>:{" "}
								<span>{data.releaseDate}</span>
							</h4>
						</CardBody>
					</Card>
				</Tab>
<!--𝗦𝗵𝗮𝗿𝗲𝗨𝗦 𝗕𝗮𝗻𝗻𝗲𝗿 𝟭--><center>
<script type="module" src="https://securepubads.shareusads.com/scripts/tag/js/sgpt.js" ></script>

<div id="shareusadx-6739644104098893-3323887418">
 <script>
     window._shareustag = window._shareustag || {cmd:[]};
    _shareustag.cmd.push(function() {
      var slot1 = _shareustag.defineSlot('/shareusadx/6739644104098893/3323887418/AniEo Banner 1', ["Responsive"],'shareusadx-6739644104098893-3323887418');
    });
  </script>
</div>
<!--𝗦𝗵𝗮𝗿𝗲𝗨𝗦 𝗕𝗮𝗻𝗻𝗲𝗿 𝟭--></center>
	
				
			</Tabs>
		</div>
	);
}
