import { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const reviews = [
  {
    id: 1,
    text: "Mr Ade is very efficient and his response time is highly commendable. Within an hour he was able to check the car and resolved the issue and even helped to get a new battery and his service fee is very reasonable 👍👍👍",
    author: "M. Ahmed",
    rating: 5
  },
  {
    id: 2,
    text: "I found Ade's details on Google and decided to give him a try, very knowledgeable guy and constantly kept me informed of his arrival. Although I live quite far from him he still came out to my house and sorted the oil leak on my BMW in about 1/2 hour. I will definitely use him again for all my mechanical work from now on.",
    author: "J. Thompson",
    rating: 5
  },
  {
    id: 3,
    text: "Provided great service in identifying the coolant leak in my car and sorting it out same day. I was very happy with the communication through the process, any messages or questions I had were given prompt responses, which I very much appreciate. Will definitely be using Car Repair Mobile Mechanic for any future problems with my car.",
    author: "S. Patel",
    rating: 5
  },
  {
    id: 4,
    text: "Really happy with the service. He responded quickly on a Sunday, came out and changed my dead car battery the same day. A nice guy to deal with too. Would recommend.",
    author: "D. Wilson",
    rating: 5
  },
  {
    id: 5,
    text: "I was buying a used car and wanted to get it checked before the purchase. I called these guys and he was very helpful, at a reasonable price he checked the whole car very thoroughly. He was also very sweet and polite.",
    author: "L. Brown",
    rating: 5
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ))}
  </div>
);

const ReviewsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, 2);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-dm-sans">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <StarRating rating={5} />
              <span className="text-2xl font-bold text-foreground">4.9</span>
            </div>
            <span className="text-muted-foreground">(52 reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {visibleReviews.map((review, index) => (
            <Card 
              key={review.id} 
              className={`card-3d reveal ${index < 2 ? 'visible' : ''} shadow-card hover:shadow-card-hover`}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <StarRating rating={review.rating} />
                </div>
                <blockquote className="text-foreground mb-4 leading-relaxed">
                  "{review.text}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-medium text-sm">
                      {review.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{review.author}</div>
                    <div className="text-sm text-muted-foreground">Verified Customer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="btn-large"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-5 h-5 mr-2" />
                Show Less Reviews
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5 mr-2" />
                Show More Reviews
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;