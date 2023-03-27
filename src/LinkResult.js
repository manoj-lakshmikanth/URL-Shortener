import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const LinkResult = ({ inputVal }) => {
  const [shortenLink, setshortenLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      let response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputVal}`
      );
      setshortenLink(response.data.result.full_short_link);
    } catch (error) {}
  }

  useEffect(() => {
    if (inputVal.length) {
      fetchData();
    }
  }, [inputVal]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  return (
    <div className="result">
      <p>{shortenLink}</p>
      <CopyToClipboard
        text={shortenLink}
        onCopy={() => {
          setCopied(true);
        }}
      >
        <button
          className={copied ? 'copied' : ''}
          onClick={() => {
            setshortenLink('');
          }}
        >
          Copy to clipboard
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default LinkResult;
