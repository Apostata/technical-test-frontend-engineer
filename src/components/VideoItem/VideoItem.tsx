import React, { ReactChild, useEffect, useState, useMemo } from "react";
import { Col, Row, Image, Card } from "react-bootstrap";
import { IsoToLocaleDate } from "../../helpers/isoToLocaleDate";
import Styles from "./VideoItem.module.css";
interface IVideoItemProps {
  video: IYoutubeItem;
  artist: ITMAtraction;
  indice: number;
}

export default function VideoItem({ video, artist, indice }: IVideoItemProps) {
  return useMemo(
    () => (
      <article className={Styles.Item}>
        <div className={Styles.Card}>
          <Row className="">
            <Col xs={12} sm={4} className={Styles.image}>
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
                <Image
                  src={video?.snippet.thumbnails.medium.url ?? ""}
                  rounded
                />
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
            </Col>
            <Col xs={12} sm={8}>
              <Row>
                <Col xs={12}>
                  <h3>{video?.snippet.title ?? ""}</h3>
                  <p>{video.snippet.description}</p>
                  <p>
                    Publicando em {IsoToLocaleDate(video.snippet.publishedAt)}
                    <br />
                    por: <span>{video.snippet.channelTitle}</span>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={3}>
                  <div className={Styles.tagsContainer}>
                    <span className={Styles.tags}>
                      {artist.classifications[0].genre.name}
                    </span>
                    <span className={Styles.tags}>
                      {artist.classifications[0].subGenre.name}
                    </span>
                  </div>
                </Col>
                <Col xs={12} sm={9}>
                  {Object.keys(artist.externalLinks as ITMExternalLinks).reduce(
                    (acu: ReactChild[], link, idx) => {
                      const url =
                        (artist.externalLinks as ITMExternalLinks)[link][0]
                          .url ?? null;
                      if (url) {
                        acu.push(
                          <a
                            key={`externalLink-${idx}`}
                            href={url}
                            target="_blank"
                            className={[Styles.midias, Styles[link]].join(" ")}
                          >
                            {link !== "homepage" ? (
                              <i
                                className={`fa fa-${
                                  link !== "itunes" ? link : "music"
                                }`}
                                aria-hidden="true"
                              ></i>
                            ) : (
                              url
                            )}
                          </a>
                        );
                      }
                      return acu;
                    },
                    []
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </article>
    ),
    [video, artist]
  );
}
