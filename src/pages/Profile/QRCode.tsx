import { styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { QRCode } from "react-qrcode-logo";

interface QRCodeProps {
	url: string;
}

const StyledQRC = styled(QRCode)(({ theme }) => ({
	bgcolor: theme.palette.primary.main,
}));

const QRC = ({ url }: QRCodeProps) => {
	const theme = useTheme();
	return (
		<StyledQRC
			qrStyle="dots"
			eyeRadius={31}
			eyeColor={theme.palette.background.default}
			value={url}
			size={250}
			fgColor={theme.palette.background.default}
		/>
	);
};

export default QRC;
