import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ Info }) {

    const INIT_URL = "https://images.unsplash.com/photo-1545042679-41d22b2ca130?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGR1c3R5fGVufDB8fDB8fHww";

    const HOT_URL = "https://media.istockphoto.com/id/1011128754/photo/thermometer-in-the-sky-the-heat.webp?b=1&s=170667a&w=0&k=20&c=kKYCK4MuCkm5dV0isRuV0K5qjLmHEo8m0L8fbnd82KQ=";
    const COLD_URL = "https://images.unsplash.com/photo-1631315124498-41ebb8b10ede?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1666258224619-a018ae456f86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    return (
        <div className="InfoBox">
            <div className='cardcontainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={Info.humidity > 80 ? RAIN_URL : Info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {Info.city}{
                                Info.humidity > 80 ? <ThunderstormIcon /> : Info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {Info.temp}&deg;C</p>
                            <p>Humidity = {Info.humidity}</p>
                            <p>Min Temp = {Info.tempMin}&deg;C</p>
                            <p>Max Temp = {Info.tempMax}&deg;C</p>
                            <p>The Weather can be described as <i>{Info.weather}</i> and  feels like {Info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}